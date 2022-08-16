import './Rcoding.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

// import Ldiv from './ldiv/Ldiv';
import Rdiv from './Rdiv';

function Rcoding(){

    return(
    <div className='myContainer'>
        {/* <AceEditor
        mode="c_cpp"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        /> */}
        {/* <Ldiv /> */}
        <Rdiv/>
    </div>
    )
}

export default Rcoding;