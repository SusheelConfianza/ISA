const SignupBox = () => {
  return (
    <div className="row p-1 mt-3 text-left">
      <div className="signup_box col-12">
        <h5> Indian Steel Association Events </h5>
        <p>Sign up to receive update of our events by Email</p>
        <p>You can easily unsubscribe anytime.</p>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Please enter your email id"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            {" "}
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupBox;
