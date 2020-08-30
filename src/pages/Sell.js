import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Sell extends Component {
    render() {
	    return (
		    <div>
               <div>
        <nav className="navbar navbar-default navbar-expand-lg" role="navigation-demo">
          <div className="container">
            <div className="navbar-translate">
            <h3 className="title text-center"><Link to="/">Kisankranti</Link></h3>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
              <Link to="/Login" className="btn btn-success btn-raised btn-round " data-toggle="dropdown" >Login </Link>
              </ul>
            </div>
          </div>
        </nav>

        <div style={{backgroundImage: 'url(assets/img/selling\ page.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-10 mx-auto">
              <div className="card card-login">
                <form className="form">
                  <div className="card-header card-header-success text-center">
                    <h4 className="card-title">Tell Us What You Need To Sell?</h4>
                  </div>
                  <div className="card-body">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Product / Service Name" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Requirement Details" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Product Description" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Location " />
                    </div>
		    
		      <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Product Price ₹ " />
                    </div>
                  
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        </span>
                      </div>
                      <label htmlFor="contactform-upload">Upload Photos of selling Product :</label><br />
                      <input id="contactform-upload" type="file" name="contactform-upload[]" multiple className="file file-loading" data-show-preview="false" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        </span>
                      </div>
                      <label htmlFor="contactform-upload">Upload Video of selling Product :</label><br />
                      <input id="contactform-upload" type="file" name="contactform-upload[]" multiple className="file file-loading" data-show-preview="false" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        </span>
                      </div>
                      <label htmlFor="contactform-upload">Quantity :</label><br />
                      <input type="number" placeholder="" />
                      
                      <select id="contactform-default-select">
                        <option value selected>Select</option>
                        <option value="Box">Box</option>
                        <option value="Daba">Dozen</option>
                        <option value="Gms">Gms</option>
                        <option value="Goni">Goni</option>
                        <option value="Grams">Grams</option>
                        <option value="Hunderd Pieces">Hunderd Pieces</option>
                        <option value="Kg">Kg</option>
                        <option value="Liters">Liters</option>
                        <option value="Nama">Nama</option>
                        <option value="Packet">Packet</option>
                        <option value="Peti">Peti</option>
                        <option value="Piece">Piece</option>
                        <option value="Qtl">Qtl</option>
                        <option value="Quintal">Quintal</option>
                        <option value="Ton">Ton</option>
                        <option value="Tray">Tray</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div id="checkRadios1">
                      {/* <div class="row"> */}
                      <div className="col-lg-5 col-md-4 col-sm-5">
                        <div className="form-check">
                          <label>Quality :</label>
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" defaultValue />
                            A-Grade
                            <span className="form-check-sign">
                              <span className="check" />
                            </span>
                          </label>
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" defaultValue />
                            B-Grade
                            <span className="form-check-sign">
                              <span className="check" />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div id="checkRadios2">
                        {/* <div class="row"> */}
                        <div className="col-lg-6 col-md-4 col-sm-5">
                          <div className="form-check">
                            <label>Size :</label>
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              Small
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              Medium
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" defaultValue />
                              Large
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="Enter Rate Per kg" />
                        </div>
                        <div id="checkRadios3">
                          {/* <div class="row"> */}
                          <div className="col-lg-7 col-md-4 col-sm-5">
                            <div className="form-check">
                              <label>Colour :</label>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" defaultValue />
                                Pink
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </label>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" defaultValue />
                                Red
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </label>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" defaultValue />
                                White
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </label>
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" defaultValue />
                                Green
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </label>
                            </div>
                          </div>
                          <div id="checkRadios4">
                            {/* <div class="row"> */}
                            <div className="col-lg-5 col-md-4 col-sm-5">
                              <div className="form-check">
                                <label>Type : Organic</label>
                                <label className="form-check-label">
                                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" />
                                  Yes
                                  <span className="circle">
                                    <span className="check" />
                                  </span>
                                </label>
                                <label className="form-check-label">
                                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                  No
                                  <span className="circle">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                </span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter Cost" />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                </span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter Product Weight" />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                </span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter Product Size" />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                </span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter Product Type" />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                </span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter Order Quantity" />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                </span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter Minimum Quantity" />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                </span>
                              </div>
                              <input type="text" className="form-control" placeholder="Enter Quantity To Sell in 500kg" />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="footer text-center">
                            <a href="#" className="btn btn-success btn-raised btn-round">Submit</a>
                          </div>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></form>
              </div>
            </div>
          </div>
        </div></div>
     </div>
 </div> 
	     );
    }
}
export default Sell;
