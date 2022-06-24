import "./form.css";

export default function Form() {
  return (
    <form className="form">
      <div className="d-flex gap-8">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">Show email and password</label>
      </div>
      <div className="d-flex gap-8 j-space-between mr-top-16 w-100">
        <div className="d-flex gap-8">
          <input type="radio" id="age" name="age" value="age" />
          <label for="age">Age</label>
        </div>
        <div className="d-flex gap-8">
          <input type="radio" id="no-age" name="age" value="noAge" />
          <label for="no-age">No Age</label>
        </div>
      </div>
      <div className="d-flex gap-8 mr-top-16 w-100">
        <input className="w-100" type="email" placeholder="Email" />
      </div>
      <div className="d-flex gap-8 mr-top-16 w-100">
        <input className="w-100" type="password" placeholder="Password" />
      </div>
      <div className="d-flex gap-8 mr-top-16 w-100">
        <input className="w-100" type="number" placeholder="Minimum age" />
      </div>
      <div className="d-flex gap- 8 mr-top-16 w-100">
        <input className="w-100" type="number" placeholder="Maximum age" />
      </div>
      <button className="mr-top-16" type="submit">
        Submit
      </button>
    </form>
  );
}
