import React from 'react';
import './css/AllRightsReserved.css'; // Stilizacija može biti u odvojenom CSS fajlu
import '@fortawesome/fontawesome-free/css/all.css';

const AllRightsReserved = () => {
  return (
    <div className="all-rights-reserved">
      <p>&copy; {new Date().getFullYear()} KFZ HAMPI. All Rights Reserved. Follow us:
        <a href="https://www.facebook.com/kfz.hampi"><i className="fab fa-facebook"></i></a>
      </p>
    </div>
  );
};

export default AllRightsReserved;

