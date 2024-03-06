function Filter() {
  return (
    
      <div className="filter-wrap">
        <form className="color-cb checkbox">
          <h2>Colour</h2>
          <div className="filter-dash">
            <div className="checkbox-wrap">
              <input type="checkbox" name="black" value="black" id="black" />
              Black
            </div>
            <div className="checkbox-wrap">
              <input type="checkbox" name="white" value="white" id="white" />
              White
            </div>
            <div className="checkbox-wrap">
              <input type="checkbox" name="blue" value="blue" id="blue" />
              Blue
            </div>
            <div className="checkbox-wrap">
              <input type="checkbox" name="green" value="black" id="black" />
              Black
            </div>
          </div>

        </form>
        <form className="brand-cb checkbox">
          <h2>Brand</h2>

          <div className="filter-dash">
            <div className="checkbox-wrap">
              <input type="checkbox" name="apple" value="apple" id="apple" />
              apple
            </div>
            <div className="checkbox-wrap">
              <input
                type="checkbox"
                name="samsung"
                value="samsung"
                id="samsung"
              />
              samsung
            </div>
            <div className="checkbox-wrap">
              <input type="checkbox" name="xiaomi" value="xiaomi" id="xiaomi" />
              xiaomi
            </div>
            <div className="checkbox-wrap">
              <input
                type="checkbox"
                name="oneplus"
                value="oneplus"
                id="oneplus"
              />
              oneplus
            </div>
          </div>
        </form>
      </div>
    
  );
}
export default Filter;
