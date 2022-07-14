import React, {useState} from 'react'
import styles from './Login/Login.module.css'

function Register() {
    const [infor, setInfor] = useState({
        username: "",
        email: "",
        password: "",
        cfpassword: ""
    });

    const [focused, setFocused] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);
    const [focused4, setFocused4] = useState(false);

    const handleName = () => {
        setFocused(true);
    };
    const handleEmail = () => {
        setFocused2(true);
    };
    const handlePass = () => {
        setFocused3(true);
    };
    const handleCfPass = () => {
        setFocused4(true);
    };

    const handleChange = (e) => {

        const { name, value } = e.target;
        setInfor({ ...infor, [name]: value });
    };

    return (

        <div className={styles.wrapper}>
            <form className={styles.form}>
                <h1>REGISTER</h1>
                <div><br />
                    <input
                        className={styles.input}
                        type="text" placeholder="Username"
                        onChange={handleChange}
                        pattern="^a-z0-9A-Z_[:space:]ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u','',$text"
                        required
                        onBlur={handleName}
                        onFocus={() => setFocused(false)}
                        focused={focused.toString()}
                        name="username"
                        value={infor.username}
                    />
                    <span className={styles.span} >Username is not empty!</span>
                </div>

                <div><br />
                    <input
                        className={styles.input}
                        placeholder="Email"
                        type="Email"
                        onChange={handleChange}
                        required

                        onBlur={handleEmail}
                        onFocus={() => setFocused2(false)}
                        focused={focused2.toString()}
                        name="email"
                        value={infor.email}
                    />
                    <span className={styles.span}>Email invalid.</span>
                </div>

                <div><br />
                    <input
                        className={styles.input}
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                        required
                        onBlur={handlePass}
                        onFocus={() => setFocused3(false)}
                        focused={focused3.toString()}
                        name="password"
                        value={infor.password}
                    />
                    <span className={styles.span}>Password invalid.</span>
                </div>

                <div><br />
                    <input
                        className={styles.input}
                        placeholder="Confirm password"
                        type="password"
                        onChange={handleChange}
                        required

                        onBlur={handleCfPass}
                        onFocus={() => setFocused4(false)}
                        focused={focused4.toString()}
                        name="cfpassword"
                        value={infor.cfpassword}
                    />
                    <span className={styles.span}>Confirm password is not true!</span>
                </div>

                <button
                    onClick={(e) => {
                        e.preventDefault()

                        if (infor.password !== infor.cfpassword)
                            alert('Confirm password not true!')
                        else
                            alert('Login successfully')
                    }}
                    className={styles.button}
                >Login</button>


            </form>
        </div>
    )


    
}

export default Register
