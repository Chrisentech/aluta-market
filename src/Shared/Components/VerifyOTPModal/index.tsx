import React, { useRef, useEffect, useState } from "react";
import { Container, FormControl, Input, ResendButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../../../Features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { MdCancel } from "react-icons/md";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
import useUsers from "../../../Features/user/userActions";
import { marketLogo } from "../../../assets";

const VerifyOTPModal:React.FC<{url:any}> = ({url}) => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
  const [activeOtpIndex, setactiveOtpIndex] = useState<number>(0);
  const { verifyOTP } = useUsers();
  const inputRef = useRef<HTMLInputElement>(null);
  const [resend,setResend] = useState(false)
  const [timer, setTimer] = useState(300000);
  let nav = useNavigate();
  const dispatch = useDispatch();
  // check if the user has enter all the values for the otp
  useEffect(() => {
    let key = 0;
    for (let i = 0; i < otp.length; i++) {
      if (otp[i]) {
        key++;
      }
      if (key === otp.length) {
        let value = {
          phone: "07067903042",
          code: Number(otp.join("")),
        };
        handleSubmit(value);
      }
    }
  }, [otp]);

  useEffect(()=>{
    setTimeout(() => {
      setResend(false);
      setInterval

    }, 300000);
  },[resend])

  const onPaste = async (val: any) => {
    const pasted = val.clipboardData.getData("text/plain");
    if (!!parseInt(pasted)) {
      setOtp(pasted.split("").slice(0, otp.length));
    }
  };
  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      await verifyOTP(values);
      dispatch(alertSuccess("Verification successful!"));
      if (url) {
        nav(url);
      } else {
        dispatch(closeModal());
      }
    } catch (error:any) {
      setLoading(false);
      console.log(error);
      for (let index = 0; index < error.graphQLErrors.length; index++) {
        dispatch(alertError(error.graphQLErrors[index].message));
      }
    }
  };

  // handle the onchange event on the otp
  const handleOnChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[index] = value.substring(value.length - 1);
    value.length === 4 ? setOtp(value.split("")) : setOtp(newOTP);
    if (!value) setactiveOtpIndex(index - 1);
    else setactiveOtpIndex(index + 1);
  };
  // add keyboard event
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    //  handleOnChange(e, index);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <Container>
      <MdCancel
        onClick={() => dispatch(closeModal())}
        color="red"
        size="18px"
        style={{ float: "right", zIndex: 10000000, position: "relative" }}
      />
      <FormControl>
        <img width={50} src={marketLogo} alt="verify-otp-logo"  />
        <label className="label">Verify OTP</label>
        <div>
          {otp.map((_, index: number) => (
            <React.Fragment key={index}>
              <Input
                disabled={loading}
                ref={index === activeOtpIndex ? inputRef : null}
                value={otp[index]}
                onChange={(e) => {
                  handleOnChange(e, index);
                }}
                onPaste={onPaste}
                onKeyDown={(e) => {
                  handleKeyDown(e, index);
                }}
                type="number"
              />
            </React.Fragment>
          ))}
        </div>
        <ResendButton onClick={() => setResend(true)}>
          resend otp {resend && `(${timer})`}
        </ResendButton>
      </FormControl>
    </Container>
  );
};

export default VerifyOTPModal;
