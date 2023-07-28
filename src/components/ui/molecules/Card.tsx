import React from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../asset/images/default.png";

interface CardProps {
    data: {
        id: number;
        title: string;
        price: number;
        description: string;
        images: string;
    }[];
}

const Card: React.FC<CardProps> = ({ data }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="row">
                    {data?.map((content) => (
                        <div className="mt-2 col-lg-3 col-md-4 col-sm-12" key={content.id}>
                            <div
                                className="card gallery-card cursor"
                                style={{
                                    backgroundColor: "transparent",
                                    height: "auto",
                                }}
                                onClick={() =>
                                    navigate(`/product/${content.id}`, { replace: true })
                                }
                            >
                                <div style={{ textAlign: "start" }}>
                                    <img
                                        src={
                                            content.images || defaultImg
                                        }
                                        alt="frame"
                                        style={{ width: "100%", height: 300, borderRadius: 10, marginBottom: 10 }}
                                        className="img-fluid"
                                    />
                                    <div style={{ paddingTop: 10 }}>
                                        <p
                                            className="m-0 lh-lg"
                                            style={{
                                                fontSize: 14,
                                                fontWeight: 700,
                                                color: "#000",
                                            }}
                                        >
                                            {content.title}
                                        </p>
                                        <p className="m-0 text-dark small-text">{content.description}</p>
                                        <p className="text-dark m-0 fw-bolder small-text lh-lg">
                                            &#36; {content.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="overlay">
                                    <div
                                        className="card-body"
                                        style={{ flexDirection: "column", paddingTop: 100 }}
                                    >
                                        <h6 className="fw-bold">Description</h6>
                                        <p className="lh-lg" style={{ fontSize: 12 }}>
                                            {content.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;
