import MainNav from "./mainnav.js"

export default function Footer () {
    return (

        <div className="container footer">
            <div className="row">

                <div className="col-sm-2 year">
                    &copy; 2021
                </div>
                <div className="col-sm-8">
                    <MainNav></MainNav>
                </div>
                <div className="col-sm-2 social-media">
                    [social media]
                </div>
            </div>
        </div>
    )
}