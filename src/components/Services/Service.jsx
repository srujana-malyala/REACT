import "./Service.css"
import servicesData from "./serviceData"


export const Service = () => {
    return (
        <>

            <div className="services-container">
                <h1 className="services-heading">Our Advantages</h1>

                <div className="services-row">
                    {servicesData.map((serv) => (
                        <div className="service-links" key={serv.id}>
                            <span className="service-icon">{serv.icon}</span>
                            <div className="service-text">
                                <h2>{serv.title}</h2>
                                <p>{serv.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>
    )
}

export default Service;