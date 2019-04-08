<template>
    <section class="contact-page-area section-gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 d-flex flex-column address-wrap">
                    <div class="single-contact-address d-flex flex-row">
                        <div class="icon">
                            <span class="lnr lnr-heart"></span>
                        </div>
                        <div class="contact-details">
                            <h5>Atención adecuada</h5>
                            <p>Te ofrecemos el mejor servicio online.</p>
                        </div>
                    </div>
                    <div class="single-contact-address d-flex flex-row">
                        <div class="icon">
                            <span class="lnr lnr-map-marker"></span>
                        </div>
                        <div class="contact-details">
                            <h5>Accede desde cualquier parte</h5>
                            <p>No importa donde estes, cuenta con nosotros.</p>
                        </div>
                    </div>
                    <div class="single-contact-address d-flex flex-row">
                        <div class="icon">
                            <span class="lnr lnr-envelope"></span>
                        </div>
                        <div class="contact-details">
                            <h5>stocktradermj@gmail.com</h5>
                            <p>¡Envia tu mensaje a cualquier hora!</p>
                        </div>
                    </div>														
                </div>
                <div class="col-lg-8">
                    <div class="form-area contact-form text-right" id="myForm">
                        <div class="row">	
                            <div class="col-lg-6 form-group">
                                <input name="name" placeholder="Nombre" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Introduce tu nombre'" class="common-input mb-20 form-control" type="text">
                            
                                <input name="email" placeholder="Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Introduce tu email'" class="common-input mb-20 form-control" type="email">

                                <input name="subject" placeholder="Asunto" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Introduce el asunto'" class="common-input mb-20 form-control" type="text">
                                <div class="mt-20 alert-msg" style="text-align: left;"></div>
                            </div>
                            <div class="col-lg-6 form-group">
                                <textarea class="common-textarea form-control" name="message" placeholder="Mensaje" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"></textarea>
                                <button class="genric-btn primary circle mt-30" style="float: right;">Enviar Mensaje</button>								
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </div>	
    </section>
</template>
