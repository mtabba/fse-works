import companyLogo from '../assets/companylogo.jpg'; 

const Header = () => {
const headerItem=['HOME', 'SERVICES', 'PROJECTS', 'ABOUT US', 'CONTACT US']

  return (
    <header className=" text-neutral-50 h-32">
      <div className="container mx-auto flex justify-between items-center pt-6">
      <div className="headerName flex items-center">
        <img src={companyLogo} alt="Company Logo" className="h-16 mr-10" /> {/* Adjust height and margin as needed */}
        <span className="text-left">MIND TECH SERVICES
        <div className="text-left">Field Services and Consultation </div>
        </span> 
      </div>
        <nav>
          <ul className="flex space-x-10">
            {headerItem.map((item, index)=> 
            <li className="headerList list-none" key={index}> {item}</li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );

}

export default Header