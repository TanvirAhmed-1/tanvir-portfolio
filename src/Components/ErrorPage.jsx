

const ErrorPage = () => {
    return (
        <div className="bg-black flex justify-center items-center">
            <h1 className="text-6xl font-bold text-center text-white">404</h1>
            <p className="text-3xl font-semibold text-center text-white">Page Not Found Go back to Home</p>
            <button className="btn bg-sky-500 hover:bg-green-500">Go to Home</button>
        </div>
    );
};

export default ErrorPage;