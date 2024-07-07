import companyLogo from '../assets/companylogo.jpg'; 

const Header = () => {
const headerItem=['HOME', 'SERVICES', 'PROJECTS', 'ABOUT US', 'CONTACT US']

  return (
    <header className=" text-neutral-50 h-32">
      <div className="container mx-auto flex justify-between items-center pt-6">
      <div className="flex items-center">
        <img src={companyLogo} alt="Company Logo" className="h-16 mr-10" /> {/* Adjust height and margin as needed */}
        <span className="text-4xl font-bold text-left">MIND TECH
        <div className="text-xl font-bold text-left">Packaging Technical Resources</div>
        </span> 
      </div>
        <nav>
          <ul className="flex space-x-12">
            {headerItem.map((item, index)=> 
            <li className="list-none hover:drop-shadow-xl" key={index}> {item}</li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );

}

export default Header