import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Parametrizacion",
    path: "/parametrizacion/roles",
    icon: <AiIcons.AiTwotoneSetting />,

    iconClosed: <FaIcons.FaChevronDown />,
    iconOpened: <FaIcons.FaChevronUp />,
    subNav: [
      {
        title: "Roles",
        path: "/parametrizacion/roles",
        icon: <FaIcons.FaHospitalUser />,
      },
      {
        title: "Usuarios",
        path: "/parametrizacion/usuarios",
        icon: <RiIcons.RiTeamFill />,
      },
      {
        title: "Ips",
        path: "/parametrizacion/ips",
        icon: <FaIcons.FaHospitalUser />,
      },
      {
        title: "Contratos",
        path: "/contratos",
        icon: <AiIcons.AiOutlineAudit />,
      },
      {
        title: "Tipos de Contrato",
        path: "/parametrizacion/tipocontrato",
        icon: <FaIcons.FaHospitalUser />,
      },
      {
        title: "Tipos de Devolucion",
        path: "/parametrizacion/Tipodevolucion",
        icon: <AiIcons.AiOutlineAudit />,
      },
    ],
  },
  {
    title: "Radicacion",
    path: "/radicacion",
    icon: <AiIcons.AiOutlineAudit />,
  },
  {
    title: "Registro",
    path: "/registro",
    icon: <AiIcons.AiOutlineAudit />,
  },
  {
    title: "Trazabilidad",
    path: "/trazabilidad",
    icon: <AiIcons.AiOutlineEye />,
  },
  {
    title: "Reportes",
    path: "/reportes",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Soporte",
    path: "/soporte",
    icon: <IoIcons.IoIosBuild />,
  },
  {
    title: "Modificaroles",
    path: "/modificaroles",
    icon: <IoIcons.IoIosBuild />,
  },
];
