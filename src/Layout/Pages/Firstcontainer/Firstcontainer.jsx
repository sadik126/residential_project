import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Firstcontainer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-16 md:w-3/4 w-full mx-auto" data-aos="fade-down">
      <h1 className="text-5xl font-extrabold text-center uppercase">
        Home Features
      </h1>
      <div className="divider divider-error w-10 mx-auto"></div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIklEQVR4nO2cTYjkRBTH47f4jXhZUHrM/6VbWl2FBRUvi570oB78PHl02YN4FhQF8eO6etHDXmQUtlHidtV0ryw4KiIePDs6A4qyfuKKOoqOro680Kw9lfQk3Z2kqjrvB7n0JK9q3j9Vr/rfSQVBBh/v23eOIrpPA8saWFPAb5poWw6aPQfAJueSc7pCdC/nOCiCBu7RROuSfKr6BlxXwN0ThXgqCM5UwPMiBNU2EyiifzXRc5z7lCAiBtmckp9NTVMjtf5XD/hTAYd0FN389t69Fxaa74SJcA45l4roRc6tOVL6RHclJ3JxSdUM4ISKohsmhxfmQUfRjZxjQ5TPkkKfrKbMkSFi1CKKOVJ49cXT1bIhyKHquyMwmuglY5S8ysX80x0fRtFNydlC5QyIbjFKxRqPkM3xD3vd7kXVd0VgONeGIL8G5hIsOVOojVT+RRC7iCBzUvYNLILMiQjiGCKIBbaD4AwFPHO03b56WkH4Gr6WYxRpS6asAqgwfGi0DN3iL8oDokvyBOnv2XOBAp5WRH/w533gwSJtiSA5rLZa5yvgC8O9+EYDj7BNbiaQR4Imul8TfWn87SsWKa89ESQHRXRw4u8XwEdFPhuzQg7mtSeC5DD6oe5hTfTdrL9vKOCkInqsFwRn5bUngkxhayQ1wXBkc4T4i2tO3GpdVrQdEWRKVBhGmqiXKwhw/Chw7bTxRZAZBFGAEkEsw9OOBl6YdsrSRK/02+0rirYjIyQHKeqOoWTZ6/4XQw18LV8MLcK2x7zWiQYeKNKW1JACiLnoEVp+oHILEcQxRJAFR4q6Y4ggjiGCOIYI4hgiiGOIII4hgvgmiBxkNQciCLl1E/IbVLJLA9kXYmTZb/IbVGvWOyLHNudAAZ+wIIfHE6KAN20XuqbAuTZGyOFgJQxvN+7QUytheL3tzi46A6KuAv42BLktecpCE20Yohyz3eFFh3Ns5Hzj9J4n5uYBI7XusN3pRWUlDO80851sGjCOBt6X4kq2Fhgfpl7w4Q0DzA1o5KDKc5DkHLg1cygp4DURgeq9EYHliXPbgOhKTfS7iEK1iJE8w7W01Nq14PAOZ4aCWwMiTFW1hBTDTmfp9EN0kzYuy+KtTudiRfStceHq6v79Z+deLGSS7EkGvGuMju/Hn4jcFR1FB1LDC3i9yEuMwk6OdbuXK0CnpqwoOhAUhd+N46VYxry3oYFHh51Op9ftnls4YMMYEJ2nwvA6HUVPZMw2PDo+KPL+4Q642CSvA89ZuLJix8BVCniDtyNKDqKYRQ6mxEacElZVJ7i9YBb67fY1Gvi8TEFG//zJjHN/mqajtuLMKcg6vyIXzMPxMLxUAS+njLAZBUnuxMnn94r2y1acGUfFFm/nxwumoORl25MKeE8BP2iif2YRZDQlZJ6rgF+K9sdWnIIinOJVlCJ6RwGP8/e7wFV2TQDRz77G8RYumLsk4IivcbyFVy9cMDPm2R+nGdquxfEaXr1wweQ5OjmIjszyz8eOxREEQRCExlCW9+RLPKcpy3vyJZ7zlOU9+RLPecrynnyJ5zxle0ba8XjOU7ZnpB2P5zxle0ZDx+N5QdmeUex4PEEQBEFYGKr2hmLP49dK1d5Q7Hn82qnaG1Kex6+dqr0h7Xn82qnaG9Kex6+dqr0h7Xn82qnaGxp6Ht8KVXtDsefxBUEQBMEZbHs9ccPbd8rriRvevnNej2p4+855Pbrh7Tvn9eiGt++c16Mb3r5zXs+w4e076fXEC9j+f4fKsqrPdOx4AAAAAElFTkSuQmCC" />

            {/* <img alt="Shoes" className="rounded-xl" /> */}
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-extrabold uppercase">
              Forced Cooling
            </h2>
            <p>
              An AC cooling system uses a refrigerant to absorb heat from indoor
              air, cooling the space through a cycle of compression and
              expansion.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIElEQVR4nO3csU0DQRBAUZdBhuSbZugGidLuaMcROSJHQOYOYL/xe9I0MP92N7vTCQAAAACAf+CY+TaT2YEgsz6CILN+8YLMjQZZ/abdG0FiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkR5NaCmGn9SNmMID6CcUKO6G2w+k0DgKt92172bftY/Tgevz3bdnk9n5/S6Y/Hx4dj5nP5subPoryd6kH2ma/lixpBrvaZ52Pm/Q5OxyV/ZQEAAAAAcFrjB7XSgnOMmQR5AAAAAElFTkSuQmCC" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-extrabold uppercase">
              Flat Screen TV
            </h2>
            <p>
              An LED TV uses light-emitting diodes for backlighting, offering
              bright, clear visuals with energy efficiency and slim design.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRklEQVR4nO2ZPU4cQRBGJ4NbIFEfWnETSOyQAxkOY4eeBoc+hx3YASaAlBTJ1iTWgLRTI/WyXb31njTZMFtVr77eH4YBAAAAABpQpL9c2tkMEKJYC4UQtZeAECUSsoO3pVQUhMQCIcFASDAQEgyEBIOPvWr/0ZbvIWo/aISo/XARovYDbS7k3d+kqKcOhASbD0KWQYiSH6HpB+CAEJGQ3EeEAwkRQnJvpAMJEUJyb6QDCRFCcm+kAwkRQnJvpAMJEUJyb6QDCRFCcm+kAwkRQnJvpAMJEUL2spHF7ONo9jRKj6PZh9qNXPu86roP9V+4xezh/+uY/amtZ+3zqus+WCFaOegd37evurt7wYIQhOwCEiKOLI6sBUiISAgJWYCEiISQkAVIiEgICVmAhIiE7CUho9nv2Y+Bv2o3cu3zajnYhNyenl6OZvfTVcwuautZ+7xaDlbIWtLXk34ADiREyRObfgAOCBEJyX1EOJAQIST3RjqQECEk90Y6kBAhJPdGOpAQIST3RjqQECEk90Y6kBAhJPdGOpAQIST3RjqQECEk90ZGTwiXFmeAEMVaEoSovQSEqP3gwwjZdt9Xs6s3976MZp++bTabO+loCM73k5PjqdZRup5qn/cy9bbt78IKKdKX+X2TjKFTinTzqhfpc49Cfs7vm7Zt6JRydnb+RsiP/oSYPc/v6+GYWjq+XvVt9tyfkH0XlrXvsIVl7TtsYVn7DltY1r69L0LbrqFzStS+wxaWte+whWXtO2xh70zWvgEAYOiGf9gMYGQ40uQnAAAAAElFTkSuQmCC" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-extrabold uppercase">
              Custom Built-ins
            </h2>
            <p>
              Custom builds involve creating tailored structures or systems,
              designed to meet specific requirements or preferences, offering
              personalized functionality and design.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="data:image/png;base64,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"></img>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-extrabold uppercase">
              Advanced Addons
            </h2>
            <p>
              Advanced Addons are enhanced plugins or extensions that provide
              extra features, customization, and functionality for software or
              platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstcontainer;
