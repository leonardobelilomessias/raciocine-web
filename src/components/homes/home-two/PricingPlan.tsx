import pricing_data from "@/data/PricingData"
import Link from "next/link"

const PricingPlan = () => {
    return (
        <div className="pricing-area pd-top-115 pd-bottom-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-9">
                        <div className="section-title text-center">
                            <h5 className="sub-title double-border">Promoção de Sites</h5>
                            <h2 className="title">Mês de Promoção para construção de sites.</h2>
                            <p className="content mt-2">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {pricing_data.filter((items) => items.page == "home_2").map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <div className="single-pricing-inner style-2">
                                <div className="header text-center">
                                    <h3>{item.plan}</h3>
                                    <div className="price">
                                        <sup>$ { }</sup>
                                        <h2 className="d-inline-block">{item.price}</h2>
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>{item.subTitle}</h4>
                                    <ul className="single-list-inner style-check">
                                        {item.pricing_list.map((list, i) => (
                                            <li key={i} className={list.class_name}><i className={list.icon}></i>{list.list}</li>
                                        ))}
                                    </ul>
                                    <div className="btn-wrap text-center">
                                        <Link className="it-btn btn-black" target="_blank"  href={`https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de criação de ${item.plan}.`}>Contratar Serviço</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricingPlan;
