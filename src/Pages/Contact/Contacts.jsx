import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Contact() {
  const location = useLocation().pathname.slice(1, 20);
  useEffect(() => {
    document.title = location.charAt(0).toUpperCase() + location.slice(1);
  });
  return (
    <div className="contacts-wrap">
      <div className="contacts">
        <div className="getInTouch">
          <div className="left">
            <h2>GET IN TOUCH</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              officia aliquid illum nesciunt ab nemo sapiente doloribus deleniti
              repellat magni.
            </p>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom">
          <div className="sales">
            <div className="call">
              <MdCall />
              <h4>Talk To Sales</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              ad explicabo voluptate labore hic? Ducimus accusantium aliquid
              voluptatem dignissimos expedita?
            </p>
            <p className="num">+8801XXX-XXXXXX</p>
          </div>
          <div className="support">
            <div className="chat">
              <IoMdChatboxes />
              <h4>Contact Customer Support</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              iusto recusandae laborum corrupti magni. Molestias obcaecati,
              alias laudantium aliquam dolore autem eius ex ducimus enim ipsa.
              Aut assumenda accusantium pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
