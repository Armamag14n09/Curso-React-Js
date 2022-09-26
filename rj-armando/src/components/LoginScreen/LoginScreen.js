


const LoginScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault(
            console.log("submit")
        )
    }
    return(
        <div style={{backgroundColor: 'bisque'}}>
            <form onSubmit={handleSubmit} className="container my5">
                <input
                type={'text'}
                className='form-control my-2'
                />
                <input
                type={'password'}
                className='form-control my2'
                />

            <button className="btn btn-primary" type="submit">Ingresar</button>
 
            </form>
        </div>
    )
}


export default LoginScreen