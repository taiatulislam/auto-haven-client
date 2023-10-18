

const Footer = () => {
    return (
        <div className="border-2 border-base-300 rounded-t-lg">
            <div className="max-w-7xl mx-auto mt-10">
                <div className="text-center">
                    <img src="https://i.ibb.co/nwnDrg5/car-logo.png" alt="" className="w-[200px] mx-auto" />
                    <p className="text-xl font-semibold mx-auto">Auto <span className="text-[#fd9c01]">Haven</span></p>
                    <p className="mx-auto">Bringing Dreams to Driveways</p>
                </div>
                <footer className="footer p-10 bg-base-100 text-base-content">
                    <nav className="mx-auto">
                        <header className="footer-title mx-auto">Services</header>
                        <a className="link link-hover mx-auto">Branding</a>
                        <a className="link link-hover mx-auto">Design</a>
                        <a className="link link-hover mx-auto">Marketing</a>
                        <a className="link link-hover mx-auto">Advertisement</a>
                    </nav>
                    <nav className="mx-auto">
                        <header className="footer-title mx-auto">Company</header>
                        <a className="link link-hover mx-auto">About us</a>
                        <a className="link link-hover mx-auto">Contact</a>
                    </nav>
                    <nav className="mx-auto">
                        <header className="footer-title mx-auto">Legal</header>
                        <a className="link link-hover mx-auto">Terms of use</a>
                        <a className="link link-hover mx-auto">Privacy policy</a>
                        <a className="link link-hover mx-auto">Cookie policy</a>
                    </nav>
                    <form className="mx-auto">
                        <header className="footer-title mx-auto">Newsletter</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn bg-[#fd9c01c9] normal-case absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
            <p className="bg-[#fd9c01c9] font-semibold text-center py-2">Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;