import "./CloudLab.css";

function CloudLab() {
  return (
    <section className="cloudlab-section" id="cloud-lab">
      <div className="cloudlab-container">

        {/* Header */}
        <div className="cloudlab-header">

          <div>
            <span className="section-label">
              CLOUD LAB
            </span>

            <h2>
              This is how
              <br />
              the <span>cloud connects.</span>
            </h2>
          </div>

          <p>
            Explore the architecture behind a modern static
            website — from the user request to global delivery
            through Azure.
          </p>

        </div>

        {/* Architecture */}
        <div className="architecture">

          {/* Step 01 */}
          <div className="architecture-step">

            <div className="architecture-number">
              01
            </div>

            <div className="architecture-icon user-icon">
              <span>U</span>
            </div>

            <div className="architecture-content">
              <span className="architecture-label">
                CLIENT
              </span>

              <h3>User</h3>

              <p>
                A visitor requests the CloudConnect
                website through a browser.
              </p>
            </div>

          </div>

          {/* Connector */}
          <div className="architecture-connector">
            <span>REQUEST</span>
            <div></div>
            <span>→</span>
          </div>

          {/* Step 02 */}
          <div className="architecture-step featured-node">

            <div className="architecture-number">
              02
            </div>

            <div className="architecture-icon frontdoor-icon">
              <span>FD</span>
            </div>

            <div className="architecture-content">
              <span className="architecture-label">
                GLOBAL ENTRY
              </span>

              <h3>Azure Front Door</h3>

              <p>
                Provides global routing, HTTPS and
                edge delivery for incoming requests.
              </p>
            </div>

          </div>

          {/* Connector */}
          <div className="architecture-connector">
            <span>ROUTE</span>
            <div></div>
            <span>→</span>
          </div>

          {/* Step 03 */}
          <div className="architecture-step">

            <div className="architecture-number">
              03
            </div>

            <div className="architecture-icon storage-icon">
              <span>S</span>
            </div>

            <div className="architecture-content">
              <span className="architecture-label">
                ORIGIN
              </span>

              <h3>Azure Storage</h3>

              <p>
                Hosts the static website files in the
                <strong> $web </strong>
                container.
              </p>
            </div>

          </div>

          {/* Connector */}
          <div className="architecture-connector">
            <span>SERVE</span>
            <div></div>
            <span>→</span>
          </div>

          {/* Step 04 */}
          <div className="architecture-step">

            <div className="architecture-number">
              04
            </div>

            <div className="architecture-icon web-icon">
              <span>WEB</span>
            </div>

            <div className="architecture-content">
              <span className="architecture-label">
                CONTENT
              </span>

              <h3>Static Website</h3>

              <p>
                HTML, CSS, JavaScript and images are
                delivered to the visitor.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Information */}
        <div className="cloudlab-bottom">

          <div className="cloudlab-feature">
            <span>HTTPS</span>
            <p>
              Secure communication through Azure Front Door.
            </p>
          </div>

          <div className="cloudlab-feature">
            <span>GLOBAL ROUTING</span>
            <p>
              Requests are handled through Microsoft's
              global edge network.
            </p>
          </div>

          <div className="cloudlab-feature">
            <span>STATIC HOSTING</span>
            <p>
              Website assets are served from Azure Storage.
            </p>
          </div>

          <div className="cloudlab-feature">
            <span>$web</span>
            <p>
              Azure Storage container containing the
              static website content.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CloudLab;