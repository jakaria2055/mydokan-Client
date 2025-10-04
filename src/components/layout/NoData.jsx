
import notfound from "../../assets/images/no-results.png"

function NoData() {
  return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-center">
                <img className='w-75' src={notfound} alt="" />
            </div>
        </div>
    </div>
  )
}

export default NoData