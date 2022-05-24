import React from "react";

const Pricing = () => {
  return (
    <div id="preview" className="preview">
      <div>
        <div data-draggable="true" style={{ position: "relative" }}>
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10">
              <div
                id="pricing-block-5"
                className="background-radial-gradient text-center text-white"
              >
                <h2 className="fw-bold">Pricing</h2>
              </div>
              <div className="row mx-4 mx-md-5" style={{marginTop: '-200px'}}>
                <div className="col-lg-4 col-md-12 p-0 py-5">
                  <div className="card h-100 rounded-lg-top-end rounded-lg-bottom-end">
                    <div className="card-header text-center pt-4">
                      <p className="text-uppercase">
                        <strong>Basic</strong>
                      </p>
                      <h3 className="mb-4">
                        <strong>$ 129</strong>
                        <small className="text-muted" style={{fontSize: '16px'}}>
                          /year
                        </small>
                      </h3>
                      <button
                        type="button"
                        className="btn btn-link w-100 mb-3"
                        style={{backgroundColor: 'hsl(0, 0%, 95%)'}}
                        data-ripple-color="primary"
                      >
                        Buy
                      </button>
                    </div>
                    <div className="card-body">
                      <ol className="list-unstyled mb-0">
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Unlimited updates</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Git repository</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>npm installation</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0">
                  <div className="card h-100 shadow-5" style={{z-index: '1'}}>
                    <div className="card-header text-center pt-4">
                      <p className="text-uppercase">
                        <strong>Enterprise</strong>
                      </p>
                      <h3 className="mb-4">
                        <strong>$ 499</strong>
                        <small className="text-muted" style={{fontSize: '16px'}}>
                          /year
                        </small>
                      </h3>
                      <button type="button" className="btn btn-primary w-100 mb-3">
                        Buy
                      </button>
                    </div>
                    <div className="card-body">
                      <ol className="list-unstyled mb-0">
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Unlimited updates</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Git repository</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>npm installation</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Code examples</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Premium snippets</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Premium support</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Drag&amp;Drop builder</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 p-0 py-5">
                  <div className="card h-100 rounded-lg-top-start rounded-lg-bottom-start">
                    <div className="card-header text-center pt-4">
                      <p className="text-uppercase">
                        <strong>Advanced</strong>
                      </p>
                      <h3 className="mb-4">
                        <strong>$ 299</strong>
                        <small className="text-muted" style="font-size: 16px">
                          /year
                        </small>
                      </h3>
                      <button
                        type="button"
                        className="btn btn-link w-100 mb-3"
                        style={{backgroundColor: 'hsl(0, 0%, 95%)'}}
                        data-ripple-color="primary"
                      >
                        Buy
                      </button>
                    </div>
                    <div className="card-body">
                      <ol className="list-unstyled mb-0">
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Unlimited updates</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Git repository</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>npm installation</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Code examples</span>
                        </li>
                        <li className="mb-3">
                          <i className="fas fa-check text-success me-3"></i>
                          <span>Premium snippets</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
