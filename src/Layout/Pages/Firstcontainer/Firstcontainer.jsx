const Firstcontainer = () => {
  return (
    <div className="mt-16 md:w-3/4 w-full mx-auto">
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
            <h2 className="card-title font-extrabold">Forced Cooling</h2>
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
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstcontainer;
