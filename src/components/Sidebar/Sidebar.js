import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {/* user */}
        <SidebarRow
          profilePic="http://placeimg.com/640/480/technics"
          nick="zabula81"
          user="Agnieszka Kamińska"
          width= {60 +"px"}
          height={60 +"px"}
        />
      </div>
      <div className="sidebar__center">
          <p>Suggestions for you</p>
        {/* suggestion */}
        <SidebarRow
          profilePic="http://placeimg.com/640/480/city"
          nick="@gnes"
          user="Agnieszka Jakaś"
        />
        <SidebarRow
          profilePic="http://placeimg.com/640/480/nature"
          nick="misiek"
          user="Mikołaj Stachera"
        />
        <SidebarRow
          profilePic="http://placeimg.com/640/480/transport"
          nick="007 Bond"
          user="James Bond"
        />
        <SidebarRow
          profilePic="http://placeimg.com/640/480/fashion"
          nick="wynonaa"
          user="Wynonna Earp"
        />
        <SidebarRow
          profilePic="http://placeimg.com/640/480/sports"
          nick="damon"
          user="Damon Salvatore"
        />
      </div>
      <div className="sidebar__bottom">&copy; 2021 FAKE Clone Instagram</div>
    </div>
  );
}

export default Sidebar;
