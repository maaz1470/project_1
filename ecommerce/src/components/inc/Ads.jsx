import Offer from './../../assets/images/offer.jpg'
export default function Ads(){
    return (
        <>
            <div className="container pb-16">
                <a href="#">
                <img src={Offer} alt="ads" className="w-full" />
                </a>
            </div>
        </>
    )
}