
const AddCoffees = () => {
    const handleAddCoffees=event=>{
        event.preventDefault();

        const form=event.target;

        const name= form.name.value;
        const Supplier= form.Supplier.value;
        const Category= form.Category.value;
        const Chef= form.Chef.value;
        const Taste= form.Taste.value;
        const Details= form.Details.value;
        const photo= form.photo.value;
        const newCoffee={name,Supplier,Category,Chef,Taste,Details,photo};
        console.log(newCoffee);

        //sent data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        
        .then(res=>res.json)
        .then(data=>
            console.log(data))

    }
    return (
       <div className=" mx-auto  my-12 bg-[#F4F3F0] w-[1320px] h-[878px]">
        <h1 className=" text-4xl text-gray-950 text-center  mt-11">Update Existing Coffee Details</h1>
        <p className=" text-center my-4 ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at<br></br> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed<br></br> to using Content here.</p>

        <form className=" grid justify-center " onSubmit={handleAddCoffees}>
        <div className=" mx-12 mt-8 grid lg:grid-cols-2 justify-center items-center">
            <div className=" mr-3 mb-3">
            <h3>Name</h3>
            <input className=" p-2  w-96 h-16" type="text" name="name" placeholder="Enter the new coffee name" ></input>
           
            <h3>Supplier</h3>
            <input className=" p-2  w-96 h-16" type="text" name="Supplier" placeholder="Enter the new coffee Supplier" ></input>
            
            <h3>Category</h3>
            <input className=" p-2  w-96 h-16" type="text" name="Category"  placeholder="Enter the new coffee Category" ></input>
            </div>
            <div className=" mr-3 mb-3">
            <h3>Chef</h3>
            <input className=" p-2  w-96 h-16" type="text" name="Chef" placeholder="Enter the new coffee Chef" ></input>
           
            <h3>Taste</h3>
            <input className=" p-2  w-96 h-16" type="text" name="Taste"  placeholder="Enter the new coffee Taste" ></input>
            
            <h3>Details</h3>
            <input className=" p-2  w-96 h-16" type="text" name="Details"  placeholder="Enter the new coffee Details" ></input>
            </div>
            
        </div>
        <input type=" text"  className=" mt-10  p-2  " name="photo" placeholder="Enter the new coffee image link"></input>
        <input type="submit" value="Add Coffee" className=" mt-10  btn btn-block bg-[#D2B48C]"></input>
        </form>
       </div>
    );
};

export default AddCoffees;