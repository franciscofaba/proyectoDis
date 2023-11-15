import React from 'react';
import Card from './Card';

function CardContainer() {
    return (

            <div class="container text-center">
                <div class="row">
                    <div class="col-3  p-3">
                        <div class="card text-center h-100">
                            <h5 class="card-header">Featured</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                                <li class="list-group-item">A fourth item</li>
                                <li class="list-group-item">And a fifth one</li>
                               
                            </ul>

                            <form class="d-flex p-3" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>

                            <div class="card p-3 m-1" style={{width: '18rem'}}>
                                <div class="card-body ">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-9">


                        <div class="container g-2 mb-2">
                            <div class="row g-2">
                                <div class="col-12">
                                    <div class="p-3 ">
                                        
                                        <div class="card" >
                                            <h5 class="card-header">Featured</h5>
                                            <div class="card-body">
                                                
                                                <div class="row">
                                                    <div class="col-2">
                                                        <div class="dropdown">
                                                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Ordenar por:
                                                            </a>

                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-7">

                                                    </div>
                                                    <div class="col-3">

                                                        <nav aria-label="...">
                                                            <ul class="pagination">
                                                                
                                                                <li class="page-item desactive"><a class="page-link" href="#">1</a></li>
                                                                <li class="page-item desactive" aria-current="page">
                                                                <a class="page-link" href="#">2</a>
                                                                </li>
                                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                                <li class="page-item">
                                                                <a class="page-link" href="#">Next</a>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container text-center">
                            <div class="row g-2">
                                <div class="col-4">
                                    <div class=" "><Card></Card></div>
                                </div>
                                <div class="col-4">
                                    <div class=" "><Card></Card></div>
                                </div>
                                <div class="col-4">
                                    <div class=" "><Card></Card></div>
                                </div>
                                
                                <div class="col-4">
                                    <div class=" "><Card></Card></div>
                                </div>
                                <div class="col-4">
                                    <div class=" "><Card></Card></div>
                                </div>
                                <div class="col-4">
                                    <div class=" "><Card></Card></div>
                                </div>
                            </div>
                            
                        </div>



                    </div>
                    
                </div>
           </div>             

    );
}

export default CardContainer;