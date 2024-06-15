import React from "react";
import Layout from "../../../../Layouts";
import { GridWrapper, Wrapper } from "./SavedForLater.styles";
import { Button, Card, ImageCard } from "../../../../Shared/Components";
import { phone } from "../../../../assets";
import { IoMdCart } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

const Screen: React.FC = () => {
	return (
		<Wrapper>
			<div className="flex">
				<h2>Saved For Later</h2>
			</div>

			<Card className="main" width="100%" height={600}>
				<GridWrapper>
					<div className="container">
						<MdOutlineCancel className="svg" size={24} />
						<div className="img">
							<ImageCard src={phone} width={"120px"} />
						</div>

						<p className="title">Headset</p>
						<p className="price">N32,000</p>
						<Button color="#fff" background="#FF9017">
							<IoMdCart color="#fff" />
							<span>Move to Cart</span>
						</Button>
					</div>
					<div className="container">
						<MdOutlineCancel className="svg" size={24} />
						<div className="img">
							<ImageCard src={phone} width={"120px"} />
						</div>

						<p className="title">Headset</p>
						<p className="price">N32,000</p>
						<Button color="#fff" background="#FF9017">
							<IoMdCart color="#fff" />
							<span>Move to Cart</span>
						</Button>
					</div>

					<div className="container">
						<MdOutlineCancel className="svg" size={24} />
						<div className="img">
							<ImageCard src={phone} width={"120px"} />
						</div>

						<p className="title">Headset</p>
						<p className="price">N32,000</p>
						<Button color="#fff" background="#FF9017">
							<IoMdCart color="#fff" />
							<span>Move to Cart</span>
						</Button>
					</div>
					<div className="container">
						<MdOutlineCancel className="svg" size={24} />
						<div className="img">
							<ImageCard src={phone} width={"120px"} />
						</div>

						<p className="title">Headset</p>
						<p className="price">N32,000</p>
						<Button color="#fff" background="#FF9017">
							<IoMdCart color="#fff" />
							<span>Move to Cart</span>
						</Button>
					</div>
					<div className="container">
						<MdOutlineCancel className="svg" size={24} />
						<div className="img">
							<ImageCard src={phone} width={"120px"} />
						</div>

						<p className="title">Headset</p>
						<p className="price">N32,000</p>
						<Button color="#fff" background="#FF9017">
							<IoMdCart color="#fff" />
							<span>Move to Cart</span>
						</Button>
					</div>
					<div className="container">
						<MdOutlineCancel className="svg" size={24} />
						<div className="img">
							<ImageCard src={phone} width={"120px"} />
						</div>

						<p className="title">Headset</p>
						<p className="price">N32,000</p>
						<Button color="#fff" background="#FF9017">
							<IoMdCart color="#fff" />
							<span>Move to Cart</span>
						</Button>
					</div>
					<div className="container">
						<MdOutlineCancel className="svg" size={24} />
						<div className="img">
							<ImageCard src={phone} width={"120px"} />
						</div>

						<p className="title">Headset</p>
						<p className="price">N32,000</p>
						<Button color="#fff" background="#FF9017">
							<IoMdCart color="#fff" />
							<span>Move to Cart</span>
						</Button>
					</div>
					<div className="container">
						<MdOutlineCancel className="svg" size={24} />
						<div className="img">
							<ImageCard src={phone} width={"120px"} />
						</div>

						<p className="title">Headset</p>
						<p className="price">N32,000</p>
						<Button color="#fff" background="#FF9017">
							<IoMdCart color="#fff" />
							<span>Move to Cart</span>
						</Button>
					</div>
				</GridWrapper>
			</Card>
		</Wrapper>
	);
};

const SavedForOthers = () => {
	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
		/>
	);
};

export default SavedForOthers;
