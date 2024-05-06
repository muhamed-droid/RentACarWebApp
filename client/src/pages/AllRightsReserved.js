import React from 'react';
import './css/AllRightsReserved.css'; // Stilizacija može biti u odvojenom CSS fajlu

const AllRightsReserved = () => {
  return (
    <div className="all-rights-reserved">
      <div className="all-rights-reserved">
  <p>&copy; {new Date().getFullYear()} KFZ HAMPI. All Rights Reserved. Follow us: 
  <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
  </p>
</div>

    </div>
  );
};

export default AllRightsReserved;
