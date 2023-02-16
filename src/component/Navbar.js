import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid navbar-wrapper">
                    <a className="navbar-brand" href="/">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg" className="image_logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
               </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 myfun">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products 
                                </a>
                                <ul className="dropdown-menu " >
                                    {/* <li><a className="dropdown-item" href="/">Form Approvals</a></li>
                                    <li><a className="dropdown-item" href="/">SheetGod</a></li>

                                    <li><a className="dropdown-item" href="/">Signature</a></li> */}
                                    <div className="product-content dropdown-item">
                                    <i class="fa-solid fa-square-check product-detail-icon"></i>
                                    <div className="product-content-detail ">
                                        <div className="product-content-detail-title">Form Approvals</div>
                                        <div className="product-content-detail-desc">
                                        Create interactive workflows, approval flows & automate processes using Google Forms.
                                        </div>
                                    </div>

                                    </div>
                                    <div className="product-content dropdown-item">
                                    <i class="fa-solid fa-sheet-plastic product-detail-icon"></i>
                                    <div className="product-content-detail">
                                        <div className="product-content-detail-title">SheetGod</div>
                                        <div className="product-content-detail-desc">
                                        AI-powered Excel magic made easy!
                                        </div>
                                    </div>

                                    </div>

                                    <div className="product-content dropdown-item">
                                    <i class="fa-solid fa-envelope product-detail-icon"></i>
                                    <div className="product-content-detail">
                                        <div className="product-content-detail-title">Signature</div>
                                        <div className="product-content-detail-desc">
                                        Add Signature href your Google Forms.
                                        </div>
                                    </div>

                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://www.boloforms.com/form-approval/pricing/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://approval-docs.boloforms.com/">Guides</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.boloforms.com/workflow-templates/">Templates</a>
                            </li>


                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                            <button class="install-now" onClick={()=> window.location.href="https://workspace.google.com/marketplace/app/boloforms_approvals_for_google_forms_and/674195424545?ref=website"}><span>Install Now</span></button>
                            <button class="bolo-premium"  onClick={()=> window.location.href="https://www.boloforms.com/form-approval/pricing/"}><span>BoloForms Premium</span></button>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
        // <nav class="navbar navbar-expand-lg bg-body-tertiary">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li class="nav-item dropdown">
        //                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                     </a>
        //                     <ul class="dropdown-menu">
        //                         <li><a class="dropdown-item" href="#">Action</a></li>
        //                         <li><a class="dropdown-item" href="#">Another action</a></li>
        //                         <li><hr class="dropdown-divider"/></li>
        //                         <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                     </ul> 
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link disabled">Disabled</a>
        //                 </li>
        //             </ul>
        //             <form class="d-flex" role="search">
        //                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //                     <button class="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </div>
        // </nav>

    )
}

export default Navbar
