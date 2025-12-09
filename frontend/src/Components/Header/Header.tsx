import { Avatar, Burger, Button, Drawer, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings, IconX } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NotiMenu from "./NotiMenu";
import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { name: "Find Jobs", url: "find-jobs" },
  { name: "Find Talent", url: "find-talent" },
  { name: "Post Job", url: "post-job/0" },
  { name: "Posted Jobs", url: "posted-jobs/0" },
  { name: "Job History", url: "job-history" },
];

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // set up axios interceptor once
    setupResponseInterceptor(navigate, dispatch);
  }, [navigate, dispatch]);

  const handleClick = (url: string) => {
    navigate(url);
    close();
  };

  // Hide header on auth pages
  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  return (
    <div
      data-aos="zoom-out"
      className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']"
    >
      <div
        onClick={() => navigate("/")}
        className="flex gap-1 cursor-pointer items-center text-bright-sun-400"
      >
        <IconAnchor className="h-8 w-8" stroke={2.5} />
        <div className=" xs-mx:hidden text-3xl font-semibold">JobHook</div>
      </div>

      {NavLinks()}

      <div className="flex gap-3 items-center">
        {user ? (
          <ProfileMenu />
        ) : (
          <Link
            to="/login"
            className="text-mine-shaft-200 hover:text-bright-sun-400 "
          >
            <Button color="brightSun.4" variant="subtle">
              Login
            </Button>
          </Link>
        )}

        {user ? <NotiMenu /> : null}

        <Burger
          className="bs:hidden"
          opened={opened}
          onClick={open}
          aria-label="Toggle navigation"
        />

        <Drawer
          size="xs"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          position="right"
          opened={opened}
          onClose={close}
          closeButtonProps={{
            icon: <IconX size={30} />,
          }}
        >
          <div className="flex flex-col gap-6 items-center">
            {links.map((link, index) => (
              <div key={index} className="h-full flex items-center">
                <div
                  className="hover:text-bright-sun-400 text-xl"
                  onClick={() => handleClick(link.url)}
                >
                  {link.name}
                </div>
              </div>
            ))}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
