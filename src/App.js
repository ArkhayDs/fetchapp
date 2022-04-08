import './App.css';
import FormCreateUser from "./Component/FormCreateUser";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <>
            <div className="bg-dark row" style={{height:'150px'}}>
                <br />
                <h1 className="text-white text-center">FetchApp</h1>
            </div>
            <FormCreateUser/>
        </>
    );
}