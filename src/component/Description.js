import './Description.css'


const Description = () => {
    const handleEnter = () => {
        console.log("entered")
        document.getElementById("thisis").style.display = "";
    }
    const handleOut = () => {
        document.getElementById("thisis").style.display = "none";
    }

    return (
        <div>
            <div className="description-wrapper">
                <div className="items">
                    {/* <div className="hoveritem" >
                        <div>
                            <div className="circle-radius" onMouseEnter={handleEnter} onMouseOut={handleOut}>
                            </div>
                            <div>Thiisi</div>
                        </div>

                        <div className="circle-radius"></div>
                        <div className="circle-radius"></div>
                        <div className="circle-radius"></div>
                    </div>  */}
                    
                    <div className="content">
                    <div className="hovering">
                        <a class="Dot active" href="#Supports">
                            <div class="dotSpace">
                                {/* <span className="hovering-item">.</span>
                                
                                */}
                                <i class="fa-solid fa-circle" style={{color:"rgb(189, 188, 188)",fontSize:"10px"}}></i>
                                <span class="spanDot">
                                <i class="mx-2 fa-solid fa-address-book"></i>
                                    Our Customers
                                </span>

                            </div>
                        </a>
                        <a class="Dot active" href="#Supports">
                            <div class="dotSpace">
                            <i class="fa-solid fa-circle" style={{color:"rgb(189, 188, 188)",fontSize:"10px"}}></i>


                                <span class="spanDot">
                                <i class="mx-2 fa-solid fa-question"></i>
                                    How to use?
                                </span>

                            </div>
                        </a>
                        <a class="Dot active" href="#Supports">
                            <div class="dotSpace">
                            <i class="fa-solid fa-circle" style={{color:"rgb(189, 188, 188)",fontSize:"10px"}}></i>


                                <span class="spanDot">
                                <i class="mx-2 fa-solid fa-rocket"></i>
                                    Features
                                </span>

                            </div>
                        </a>
                        <a class="Dot active" href="#Supports">
                            <div class="dotSpace">
                            <i class="fa-solid fa-circle" style={{color:"rgb(189, 188, 188)",fontSize:"10px"}}></i>


                                <span class="spanDot">
                                    <i class=" mx-2 fas fa-headset"></i>
                                    Support
                                </span>

                            </div>
                        </a>
                    </div>

                        <div className="leftitem">
                            <div className="title">
                                Transform Google Forms Into Interactive Workflows
                                

                            </div>
                            <div className="about">
                                BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.
                                
                            </div>
                            <div className="buttonpresent">
                                <button class="install-for-free"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-4 text-lg md:text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg ><span>Install For Free</span></button>

                            </div>

                        </div>
                        <div className="rightitem">
                        
                            <div className="video">
                            <div ><iframe loading="lazy" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>
                            </div>

                        </div>
                    </div>
                 </div>
            </div>

         </div>
       
    )
}

export default Description
