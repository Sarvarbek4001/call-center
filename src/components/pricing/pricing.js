import React from "react";
import "./pricing.scss";
import Checkmark from "../checkmark/checkmark";
function Pricing() {
  return (
    <section className="pricing" id='price'>
      <div className="pricing__section container">
        <div className="pricing__section-card">
          <div className="pricing__section__intro">
            <div className="pricing__section__intro-wrapper">
              <p className="pricing__section__intro-text1">Starter</p>
              <h3 className="pricing__section__intro-price">$25</h3>
              <p className="pricing__section__intro-text2">
                per user/month billed annually
              </p>
            </div>
          </div>
          <div className="pricing__section-information">
            <div className="pricing__section-items">
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Unlimited inbound & intracompany calls
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Click to call</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Automated call distribution
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Mobile app</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Unlimited call queuing
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  International numbers
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">(160+ countries)</p>
              </div>
              <a href="#" className="pricing__section-compare">
                Compare plans
              </a>
            </div>
            <div className="pricing__section-trial">
              <a href="#">START FREE TRIAL</a>
            </div>
          </div>
        </div>
        <div className="pricing__section-card">
          <div className="pricing__section__intro">
            <div className="pricing__section__intro-wrapper">
              <p className="pricing__section__intro-text1">Essential</p>
              <h3 className="pricing__section__intro-price">$30</h3>
              <p className="pricing__section__intro-text2">
                per user/month billed annually
              </p>
            </div>
          </div>
          <div className="pricing__section-information">
            <div className="pricing__section-items">
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  All Starter features, plus…
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Advanced analytics with unlimited history
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Real-time client dashboard
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Integrations to other systems
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Open API</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Skill-based routing
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Smart queueing</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  SMS / Text messages
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Workflow Automation
                </p>
              </div>
              <a href="#" className="pricing__section-compare">
                Compare plans
              </a>
            </div>
            <div className="pricing__section-trial">
              <a href="#">START FREE TRIAL</a>
            </div>
          </div>
        </div>
        <div className="pricing__section-card">
          <div className="pricing__section__intro">
            <div className="pricing__section__intro-wrapper">
              <p className="pricing__section__intro-text1">Expert</p>
              <h3 className="pricing__section__intro-price">$50</h3>
              <p className="pricing__section__intro-text2">
                per user/month billed annually
              </p>
            </div>
          </div>
          <div className="pricing__section-information">
            <div className="pricing__section-items">
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  All Essential features, plus…
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Salesforce integration
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Power Dialer, Smart Dialer
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Predictive Dialer</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Call Monitoring (Call Barging, Call Whispering)
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Wallboards</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Speech to text</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Single Sign-On (SSO)
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">SQL Exporter</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Unlimited concurrent calls
                </p>
              </div>
              <a href="#" className="pricing__section-compare">
                Compare plans
              </a>
            </div>
            <div className="pricing__section-trial">
              <a href="#">START FREE TRIAL</a>
            </div>
          </div>
        </div>
        <div className="pricing__section-card">
          <div className="pricing__section__intro">
            <div className="pricing__section__intro-wrapper">
              <p className="pricing__section__intro-text1">Custom</p>
              <p className="pricing__section__contact-text">
                Contact us for tailor-made offer
              </p>
            </div>
          </div>
          <div className="pricing__section-information">
            <div className="pricing__section-items">
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  All Expert features, plus…
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  All Expert features, plus…
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Unlimited outbound calls (Flat rates)
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">
                  Enterprise-level security
                </p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Developer support</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">Custom reporting</p>
              </div>
              <div className="pricing__section-item">
                <Checkmark>
                  <i className="bi bi-check-circle-fill bi-green"></i>
                </Checkmark>
                <p className="pricing__section-paragraph">SLA</p>
              </div>

              <a href="#" className="pricing__section-compare">
                Compare plans
              </a>
            </div>
            <div className="pricing__section-trial">
              <a href="#">START FREE TRIAL</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
