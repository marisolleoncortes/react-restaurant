import MainNav from "./mainnav.js"

export default function Header () {
    return (
        <header>

        <div className="container">
            <div className="row">

                <div className="col-sm-12">
                    <h1>Unique Recepies</h1>
                </div>
                <div className="col-sm-12">
                    <MainNav></MainNav>

                </div>
            </div>
        </div>
        </header>
    )
}