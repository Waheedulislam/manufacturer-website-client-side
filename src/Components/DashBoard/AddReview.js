import React from "react";

const AddReview = () => {
  const handleAddReview = (event) => {
    event.preventDefault();
    const addReview = {
      name: event.target.name.value,
      rating: event.target.rating.value,
      description: event.target.shortDescription.value,
      imgUrl: event.target.imgUrl.value,
    };
    const url = `https://manufacturer-website-server-side-oqy2.onrender.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Successful Item added");
        event.target.reset();
      });
    console.log(addReview);
  };
  return (
    <div className="pt-6">
      <div className="card lg:w-6/12 lg:mx-52 bg-base-100 shadow-xl pt-5">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-primary text-center pb-3">
            Add a Reviews
          </h1>

          <form onSubmit={handleAddReview} className="lg:ml-16">
            {/* name  */}
            <div className="form-control pb-3 text-center w-full max-w-xs">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full max-w-md "
              />
            </div>
            {/* rating  */}
            <div className="form-control pb-3 text-center w-full max-w-xs">
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full max-w-md "
              />
            </div>
            {/* short description  */}
            <div className="form-control pb-3 text-center w-full max-w-xs">
              <textarea
                type="number"
                name="shortDescription"
                placeholder="Short Description"
                className="input input-bordered w-full max-w-md "
              />
            </div>
            {/* // image url  */}

            <div className="form-control pb-3 text-center w-full max-w-xs">
              <input
                type="photo"
                name="imgUrl"
                placeholder="Image URL"
                className="input input-bordered w-full max-w-md "
              />
            </div>
            <input
              type="submit"
              className="sm:w-56 ml-8 w-8/12 text-center btn btn-primary"
              value="Submit REview"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
