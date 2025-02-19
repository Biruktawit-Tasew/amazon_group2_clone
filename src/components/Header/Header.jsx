import styles from "./header.module.css";
import AmazonLogo from "../../assets/images/amazonLogo.png";
import { SlLocationPin } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import flag from "../../assets/images/Flag_of_the_United_States.png";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <Link to="">
            <img src={AmazonLogo} alt="" />
          </Link>
          <div className={styles.delivery_container}>
            <SlLocationPin />
            <div className={styles.delivery}>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <select name="" id="">
            <option value=""></option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button>
            <IoSearchOutline />
          </button>
        </div>
        <div className={styles.order_container}>
          <div>
            <img src={flag} alt="flag" />
            <select name="" id="">
              <option value="">AM</option>
              <option value="">EN</option>
            </select>
          </div>
          <div>
            <Link>
              <p>Sign in</p>
              <span>Account & Lists</span>
            </Link>
          </div>
          <div>
            <Link>
              <p>returns</p>
              <span>& Orders</span>
            </Link>
          </div>
          <div>
            <Link>
              <BiCart />
              <span>0</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
