import "./Leaderboard.css";
import { Form, Button,} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Table_row from './table_row'
function Leaderboard(props) {
    let si=props.s;
    let ei=props.e;
    const l_data=[{
        sr:1,
        s_time:"10.45",
        s_score:45,
        
        s_view:"abc"
    },
    {
        sr:2,
        s_time:"11:15",
        s_score:100,
        s_view:"abc"
    },
    {
        sr:1,
        s_time:"10.45",
        s_score:45,
        s_view:"abc"
    },
    {
        sr:1,
        s_time:"10.45",
        s_score:45,
        s_view:"abc"
    }]
    if(si<0)si=0;
    if(ei>=l_data.length)ei=l_data.length -1;
    console.log(ei);
    console.log(si);
    let disp_data=[];
    for(let i=0;i<=ei ;i++){
        disp_data.push(l_data[i]);
    }
    console.log(disp_data);
    
    return (
    <div className="leaderboard-pg d-flex justify-content-center align-items-center">
      <Table striped bordered hover variant="dark" className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {disp_data.map((cdata)=>{
            return(
            <tr>
            <td>{cdata.sr}</td>
            <td>{cdata.s_time}</td>
            <td>{cdata.s_score}</td>
            <td>@mdo</td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Leaderboard;
