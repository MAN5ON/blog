import React, { useState } from "react";
import s from "../../styles/profile/profile.module.css";
import { EditPage } from "./editPage";
import { UserPage } from "./userPage";

export const Profile = () => {
  const [editPage, showEditPage] = useState(false);
  const [pageText, changePageText] = useState("");
  const props = { pageText, changePageText, showEditPage };

  return (
    <div className={s.profilePage}>
      <div className={s.userLogin}>MAN5ON</div>
      <div className={s.userName}>Renat Bikmukhamedov</div>

      {editPage ? <EditPage {...props} /> : <UserPage {...props} />}

      <div className={s.regDate}>Date of registration: 09.12.2022</div>
    </div>
  );
};
