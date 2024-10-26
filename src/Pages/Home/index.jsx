import { SocialButton } from "../../Components/SocialButton"
import {images} from './images'
import {socialMedia} from './socialMedia.js'
import { FcOpenedFolder } from "react-icons/fc";
import { FaPython } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";







function Home() {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col justify-center items-center gap-6 sm:flex-row">


       <img className="size-[160px] rounded-full object-cover border-solid border-black"
            alt="yo"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUSEBAVFRUVFRUVFRcVFRUVFxYXFRUXFhcVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGislHx0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEcQAAEDAgMFBQQHBAgFBQAAAAEAAhEDIQQSMQVBUWFxBiKBkaETMrHBFCNCUnLR8AdisuEVM1OCg5LC8SRzoqPTNUNUY2T/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgIDAAMAAwAAAAAAAAABAhEDEiExQRMiUQQjMv/aAAwDAQACEQMRAD8A0Ekk64PWUJQnATwqGhOAnhPCAYTwihKEAwnhFCUIGhNCOEoQBCUIoShAEJQiShABCEhSEISgAoSjITEIIyEJCkIQQooCgIUhQFRQQknhJBdARAJQiAWmTAJ4TwiAQDCeE8J4QNCUIoShAMJ4RQkgaEoTpIBSRJkAwkiTQgGEJCNMQgjITEKQhAQgjIQlSFAQoI3BA4KUhA4IoEk8JJoXgiASAThVChPCcJQgSdJOgSSSSBJJ4WTtftDh8MDneC7cwEST8kGqkQvPan7RXn3aDROkkmOVo4KvT7bY0nNkaWTubIEbjBkJpNx6VCULj8N2rrvaTkYI3974XRjtZVB71OmBuIdIPW8j1TSushKFgUu1VMR7ZuWd4OYLYwmMp1m5qT2uHI6ciNx5FBMQmKIpigAoSjKYoIyEJCkKAoIiEBClcEDkEcJJ06KvpwkE6IUJ0ydAk6SSBJEgCTYBJeaduO1ZqudQoO+rbIc4fbdvA/dHqiW6Sdru2xc40cK4tYLPqNsSdIadw5rimUS+8k+ep/31UTWtJGYmN8K3h6DSYk8oi8cePot6c97qsKBFifPd4aLQ2djamHdc9x0CY4HiN9/JWXbMeW5rG2h18z/NQYTI4ezqtLTuMWPI8/VU1pq4vEPBH1oyPgtc0AjyAt1QVy0WLqZte+Spa1wT8AFHhG029xxBadJMR1nXxCv1mim2GljW74He6AAwo05esHOJykkXgECw3XPyVrZu2cVhqmYSHNAzA72yBB+8FpPa1rc8l7dCTlkDdy8AUeIpU3MlveEG2UgiLb/dN+iJp3Wxe01LEgWLSQ0wYtmiJ36uAnS4W6QvF/Z1aOV1EucGHjpew0gaei7nsnt576jqNR7XkAOBaZF9Qbai/lzWbG5XWlMUSZRQFCUZQlBGQo3BSlA4IIoTp0kF9OmCcIEnSToGTwkkg5Xt7t9uGw5pNP1tUZWgbm6Od8l5NWqAWA3Dw0suk/aGx7doFzzIIaW8mxEDxlczUIk71uRyzt2jyrS2XTc4Oa0iRDhyjX9DRUQ6N3r+rqXD4p7XB7SRB+Uaqsxt0sbWYIMdA4jzAHqqGIxFV5vYennvHmgxGMpVP6ynB4gxz08SovpYbZmbkDp5HVGmphKemWeehHwWg+g+JDtxgAT4iBYqnsPA1MQ4TYDruMTb4rexWzg0FpMQddx4X4rPaOuPHbNsPDYt9MGO8R94G44ToR1TM2g1xIDIzAgCNHZTIj9agi8qyXva7K18j97/AHWVjsK4OLwBxMWnnbqU2zqxaw1YsEg33jWWlxknpY+Cj2XjfY1xVZoTJvIab68p381j06r5lsm48T+vipKLy25sNNOPx4+CM7e47NxTa1JtRu/drBBgid9xqrBXG/s92l9WaLzcQ5s87H1jzXZSsugSgcpCgIQAQgIUhQFAEJkaSC2nTJ0DhOmCdAkxTpig8k/abXL8dl3U6bR4mXH4hcrVcOC6T9obI2hUPEUz/wBDR8lzFUrcccvdPSpvqOhtyf1K6HD9m3FoMmY0Q9msPbMRrYL0DZVEZQSFy5OS71Hp4OGWbycJT7M1XGA2B4megFh1K2Nmdj6uuVjd03cepmB5LvKDGnctKhRbwWO1rvOLCfGZsfs+yjThtzvdvcfytYbk2L2S4zaCdSN/Ub10tJsBTtaNFV04AdmSTLpI4WCWK7MtI/ku9q0hwWfWaFKsjz3+gG0aZMAOMgjXr4rhtqwKrgb8OW6dOq9qx+DDhC8t2/hCzE1HagFsQN5cAL/rWVrjvlx58Z18LfZ+lkqU5dBabxNiTYSOIPovS2iF5Psao76QyfvCehcWnykL1ldHGGQlEmKgAoHBSFA5ACSSSC0iQhOgdEhCdA6Yp1T2tj24ei6q4TGg4k6BFeX/ALSx/wAebR9VTPWM1/1wXLUqRqPDQtztfjn4iqKrw0d0sGUEWBkAyTxKrdm8OXOc86CwWu367c+m8+tdBs6iGwNwXUUNtYemAC4Hn+tVylQTZVXYekCc7774+caLhJHs3ZNR6NQ2rQf7tRviQFq0cQNxXjxwlEullczrBJhaGEr16bgWVu7wm2q1qMzLKvYadeynZWXJbD2oajRmN962K+Iytk8FHRrVK6qvK4/FdtaVMxlcee5Bh+3dMkAtifgr12z+SR1FY2XlG28ePpBaf7Qz5xHkR5L0iltelVFnAE6X+a8o7QsH0+sDaHza+rWm3O6YTyxy5fq1eyeGNfGAxDWyTwLQdJ/FlXp6xOx+zRRwzCR33Nl3U3hbhW3EKEoimKASgcjKAoASSSQWUkySAgiQAokBLmP2gEjDM4e0E/5XfzXTLA7bsnCdHtPo781L6aw/6jzDbjCKbJ4/KStfs/h8tBvFwzHxus3FtNSWnfZp3X0Mrb2UbUwPut+Cxb+unWY/7Nrj9lEgQSOio4fYTc59qXeOg5rvsBQaQLK67ZdN+rQeoWZa6WY33Hn+yuxgY4Zq7XUswe5oaA5xbOWXEmNYsd5UG0tjPpOdkHdk5TI8nQbmN/K69JpbKps0YPJVsZgQ50kC2nJauVrOPHjjfDn+xGFeSc4K6Htfh3ezDaYuSB4RJUux6OV8Ba21qIcYKz8dHjuOqVKQnJmE5dIE77k/JFh8W1zXF1Km5jC0F7Q7L3hNyRIi4mItrF16NjNitePcY4b2ua0j4KBuy2BuQUGsaTdrQGtO64bY6Lc1I55S27253ZdGmYyMLRvG7rz6rn8dss1tsmmZyuyOO+wpNn4R4r0bDbKp0h3RA4bh04Ll8bgPa7SqQYy0ZkdGjXwUxutpnjMtR2jGgCBYBIpNFgkujhTFCURQlECULkZQOQRp0ySCdOhRIHCcJk4QOqu1sH7ei+nvIt1Fx8PVWk6LLp5DiKWWWODhlO7UEHQ+Kt7KrWB4GPIrv9qbBoYg5nAtdvc2BPUEEFcHisM3D1qlIE5WvMExN7/NY06zOWu52NiAQF0NBwXA7FxBtddbRxAi5WY7Vp4iqGiVj4XEmrLgYbu581V7RVXewflNyIsuMp7fr0m5WMHA5iQPCAqfHqWDpCRC0MY0g3XnHZ3tM8XqAjiJmOh3roMR2xoF4a6oS46wCY6kCyLHRYUgqV+G5LH+klrg64DribLWo4sOCCpjWQFibOwADqtd3vVTlHJjIHqQT4hbe0aoyk8FViGtG+BPK2iSMZXXkKSSS6PKFCUZQoBKAoygcgjTpkkEwToU8oCThBKIFAaSGU4KAl512voZMY8/fDHDyDf9JXoi5Dt5hTNOoBNiw8t7T6uUrUQ9nBmkBZ1XtC/2pDQbEx04+Uouz+K9nUEm2h8dV1GK2BhqoOVsE3kWPmsfXottk0xqW2KtZsEAcvgs+vsupUcO75frcFYq9mSx0ipUI4SDHQx8VpYLZYMZal+D2/MaeSrpjxXKK2D7OubdzJP63K9gMOxlRrnUmyCCLXG5bGEweIAgBpHFtT5FVcTTrNMAX/E13nKuj8d+NHHbTpuYbwRxUey9oB4gG4sVzWN2fiqzS72GUgEe82DziVL2Uwz2MdUq2kkf5SRKzXPzvTe2jipIpjVxA/mr8LB2RUNWu58WaDHjYekrfWsY48l8hSTpitOZihTlCgYqNyMoHIASTSkgklKVHmSzIJZTgqLMnDkEwKeVFmTgoJZWZ2noB+FqTq0Zx1bf4StAOUG1hOHqj/63/wAJRY8yo1rEiR8V1vZzaRe0AmSFxWI7skaHWFe7O4wtd+vPpZZs+uuOWrqu4xWaZbv8kNPGZRL2+IUmz9r03DvEDmtd1BjxBAgqR1mShQ2jSLZg+St4d1M+60+KsjZ1IiIEBEabGCypc7/Q4t7Q2DoVy+29o2yss0WsNSeAU+3dojNl3C5vyNvgq/Z3CGtU9u8d1t2C+s2dHgs63WLdTbZ2JhTSotDhDj3ncid3gIHgr6eEy6OBISnKYohigKIoCgYoHIiUBQCmTJII86WdV8yTXSJF+isxt9HpYDkYKzcRjCzRs+MfJUcTtWtowNbziT6/ktfjyNx0YKMBef4/aGK/t3eFh5NhZgzyXGo9zuJcfQbk6Vns9QqYqmz36jGxrLgFz20e1lJzHspNLg4FuY2He7sgakX3wuDM94zuKlpCzR+830v8k6rMvK5VpyFnlxpEwNYgjrotaFFWoB25cpdO+WOz7MxRABceJ8bfNbzO0Pu96DJ8tPmuQrYMtHccRy3eqrDONZMHoteK59so9LHaGGE5r29Ln8kOI7QjJLjuMifT1HkvPcOazjDG+Zt15ldFsjs4+q4OrukWOUaePFZuo3MrfUWtm4d+LqOe4EMJ8+AHKN67CjNIQxoMAQJiw3BHhMIGNAAgI2nvhY39b1vxVTB7cbUrexcxzHwSJIvC1Cs/a+FaPZ1Y71OpTg74e4U3DpDyrVbEhjS4/ZBJ8BO5d8Z3m445zrUpQoKdcOAOk7iiKlmmTFA5EUDlAJKAlESgKAUk0pIKTadOozO10giJmY5QszZNR1PEewe50OBLCRAceEuHXRaGM2e7AVfb0RNA2rMAs1v9o1o0jUxbkFd7Q4YOw5qU7up5azCP3CHWPMD1XtkcdqVd7Qe8CDwLXfIX8FnYmrS3vaPxHKfJ0FdQ5oqNFRujmhw6OEqlWYDuuqSuSxrQ4juuE+6SAA7oJnzAVB7Q0GbDT+QG8rqdo4Jr2w5oInQgEctViHAMY4ENEzE6m+4E6Bc7Fc+4tdIBvGlwfEG6cH6uR9kh3gNfSVex+CaXd5oPUAqtSblMbvksWfFlWqFQOAIMgqWFjkmg+PsOu08OI8FrYSqHixXmymnqwy7E4A6qfCbLa66c4clXNn4Z4O9Ztbk/q/s/ZrRo1dJg6AaFRwjICvZoCytS1Kt4hQ07vCdt1JRZEuKe0DtU5gynxe1x5NpkPnzDR4pnFMBmcXHfYcmjd4n5KSk2XDqvdw4dcXl5c+1SVKQDWtEC0aDco/Zv+zHQ/nuUm0qgYzMdGkT0kI6GKpuZIMbjmBYR1a4Ajjfiulm/bntXD3b2keXxFkJcrbCCJBBHIyoqpZmDCW5joJEmNYG9c7xz41MqrFA5WauHI0KqvXHLG4tS7CkhlJZabGAre0osd95onrEFQU9nsaXAZtO6C92QNIjKGTlA13KhsfH0xnpUnZomowHXKT36Z5tM+Y4Fa4rB2RzdDbzH5he552P2ea6lQio8kU3vpEQCGhjyG5YbmjLGs67lLXxNBx7tVkndmAJ6BaNGgGvqR9stqeJGU/wA+KkrNDhDgCDuNwgxcRQlpssTE0u9THF/yK6HE4FtLvUaQm+ZrCGZhHCzS6Yued1zuK9rUr0m5HUQXG5NNz9PsgZmjqZ6bxKsoNoYC+iyMTs4kWHeFxzC6rEUq7TlLG1ABZ2cMcRzbkyz0MdFVqE/aw9VsaEBjx4BjifRSxduUpFrgWVWy3yIjeOBCrU8HUw1UH3qLjZ40HJ33T1W5tCjRqGRnY+8h1Gq0GN8lvqqeFxNWiZ3cRoQsZYTJrHLVbZwJLQ5qfD5wUeA7QsjK9ojl3Y8FpUcXh3XAPovNeDP49M5sVnAUnHVXH0jKiZtFrRZvnZQv2yZhoE8rpP8fNLzYtFtPKJKr1sRNhuVA4h7z3nHoreGoE7v1zXow4Jj5rjny2+krG8N6n+hUiO/TY4kR3mg24X3KSlTA/NGSuriy9o7PpBgim2c9OORztuAr2Jw9MlpdTYXRAJaCfMqPF951Nv72Y/3QfmQnxtSKtNvHN8EVHicFRAzezAdYSyWOPAZmwdVMcEz2YYQdxmTIcL5g6Znmhq3qMbuEvPhYepnwUj3SY8T0UFd9CpHdquJ3ZwzKeRytB8Z81GKgccj2lr4nKb23lpFnDTzEgSrzzEBQYnDtqCDqDLSLFrtzmncf5g2JRVb6KeKSHNiRbJRMWn2j2zzy5DHSSksdMf4van29s2YxFEAV6XeBFvaNHvU3cQRMToVHsXG+0B7jmBwFRgdBtqYIsRP81th0rIwFANc6l/ZvJb/AMupePh5Lsw1mn6z+78z+aKoFi4bBZXsOHf7OaZJBGdroIiQ4yIk+6Rqr9TaIZau00z96C6meYeBbo6CiJa653aDYxdHmT8F0WdrgHNIcCLEEEHoRqsLbVsThz+9HmosaWMFwoQ1XMW3RQMF0EbsO11jbgRYjoqmKw9vrGB7fvAXHh+S0kbSg5s7Ew1W7HD4EIW9liD3XHjYj5rcxeGZOYt6wPVR/QARNOp6ou1Cj2fI1Lj1eI8pV2lswD7o8UTcBVn+t8lZpYQD3nud4/IIm1U0azT9XTpOHOo9nwpnmpziK7dcNI4U6jD6Py/FWg8CzQpAUFMbSIu/D12jf3Wv9KbnH0TjbGG31mN5PPsz5Pgq2Ck+IugyxtBrqhfTY+qwCM9PK5o3mJcC7d7oKrbT2ow1qPss1Q5iMrRGrd5dAb4la2zrtzcSXeenosntHVy1KDuFT/SVFTnF1Wl1V1Pu2aWiHPtJzTmDQJJtdTbMxwc6HsdTe4FwDwBmA+6WkgwItM8lFi3S2nS31HX/AAt7zvPTxU20qTKgbSc0HMZ/CG6uB3HdI4qCzROaXcdOg0/PxROMfr1WfTxAw006pIp603ukgDfTe7cRuJ1BG8FWjWBNryJkaAbroC8klmkPNw0kG4vuKZU00qDarXSKoqMm4c0NeOYc2AY4Fu7VG9n1+bi3KfOyesIOdviPmnxA0cP1zWmVDZtaX0wdfZ1J5EPaI+K2qpXO0Xxj3N3ezLh/fc1x9ZXQv0CChisNVBmlVa0G+V1MOaOMFpabmTqblYe2qeINSlmdTb3xDmhzj4NdYeq6msLBYu3BekeDwosT4nEPphrXMq1Le+xrCDfQtBmegVb+l6P2s7Px06jfUtha1Y9wFV86IhpY+g/3K1N3R7T6Ky0cFDWwtKoO/TY6fvNafiFVGxsN9mnk/wCW59P+AhBpi9iFXezKbSoP6OI/q8TWb1c14/7jSfVMaOKHu4im4fv0TPmx4+CCf2p3BOMx3KoXYsf+3Rf0qPZ6Fh+KP6ZWaO9hXn8D6Tvi5qC9TbGqfMs121x9qhXb/hF38Eombaw496pk/Gx7P4gEVqBQ458UzxIgeNlHR2jQf7lam7o9p+ag2ljaTMgfUa0F03IvF7Deg0KLQ1gHgue7SGX0G8X/ACK0/wCmcMRbEUvGo0fErndr7TpOxVHI8VMsnLSiodRubp1KlI38v/ESdKdIAdXuJPoxvmj2f9YXVTobN/CDr4mT5LIxu1GPDqdMxUe5rC11ns7ou5uotJC2ZDGNa2wgADwQDWxJc7K3xMWA+ZPBBTotDRSYIaLEDcOChr4ltISZPRrnE9GtBJQUdo27tCu7/Dyyf8QtRWuAksz6fW/+JV/zUP8AyJKI2CLHoo6ZsPFJJbRgv/8AVY//ADN/jcunPupJKKVbQLH2tqz8QTJKkadT+r8VRcU6SiJRomabpkkEgKclJJAkNQpJIGCIp0kVBVwtN/vU2O6tafiFDSwlKm/6umxlvstDd/IJJKC3VYCbgHqAuZrtAxwgAWGgA4pJKLFfbtUt2jho3gg2Gjs0id3ujyW+4/D5lJJVBYTeeZHkrm5JJA0pkklB/9k="
          />
        <div className="sm:w-2/4 flex flex-col gap-5">  
          <div className="flex flex-col justify-center text-center sm:text-start">
            <p className="text-2xl font-bold text-slate-600 sm:px-2 sm:text-4xl">Juan D Marroquín</p>
            <p className="text-slate-700 sm:text-xl px-2 sm:px-2 sm:max-w-[580px]"><span className="font-medium text-blue-700">Ingenierio de Sistemas</span>, apacionado por el <span className="text-blue-700">desarrollo de software</span> y la <span className="text-blue-700">ciberseguridad</span></p>
          </div>
          <div className=" flex px-8 gap-4 justify-center flex-wrap sm:justify-start sm:max-w-[540px]">
            {socialMedia.map((item)=>(
              <SocialButton key={item.Name} to={item.to} Icon={item.Icon} Name={item.Name} buttonStyle={item.buttonStyle} iconStyle={item.iconStyle} nameStyle={item.nameStyle} color={item.color}/>
            ))}
          </div>
        </div>



      </div>
      <hr className="border border-dotted mx-4 border-gray-300 rounded-full"/>
      
      <div className="flex self-center w-2/3 sm:w-1/2 overflow-hidden">
        <ul className="flex lg:hidden justify-center items-center gap-2 flex-wrap">
            {images.map(image =>(
              <li key={image.id}>
                <img src={image.img} alt="" className="w-[30px] min-h-[30px]"/>
              </li>)
            )}
        </ul>

        <ul className="hidden lg:flex animate-scroll justify-start gap-2">
          {/* Se puede poner [...images,...images].map Pero genera error de keys "identificadores" */}
            {images.map(image =>{
                return(
                  <li key={image.id} >
                    <img src={image.img} alt="" className="min-w-[40px] min-h-[40px] sm:size-[40px] flex-shrink-0 hover:scale-75 transition-transform duration-300"/>
                  </li>)
                })
              }
            {images.map(image =>{
                return(
                  <li key={image.id}>
                    <img src={image.img} alt="" className="min-w-[40px] min-h-[40px] sm:size-[40px] flex-shrink-0 hover:scale-75 transition-transform duration-300"/>
                  </li>)
                })
              }
        </ul>
      </div>
      <section className="p-6 w-full self-center flex-col items-start justify-start lg:w-2/3">
        <div className="flex justify-start items-center gap-2">
          <h2 className="text-2xl font-bold">Proyectos</h2>
          <FcOpenedFolder className="text-4xl lg:text-5xl flex justify-center items-center"/>
        </div>
          {/* PROYECTOS AQUI  */}
        <div className="flex flex-col md:flex-row px-4 py-2 gap-5">
          <div className="bg-black/30 w-full md:w-1/2 h-[230px] border rounded-2xl"></div>
          <div className="flex flex-col md:w-1/2 h-[230px] justify-around">
            <h2 className="text-3xl">Modelo Diabetes</h2>
            <p className="">Descripcion del proyecto en maximo 2 lineas posibles</p>
            <div className="flex gap-3">
              {/* TECNOLOGIAS */}
              <FaPython className="size-[30px]"/>
              <FaPython className="size-[30px]"/>
              <FaPython className="size-[30px]"/>
              <FaPython className="size-[30px]"/>
            </div>
            <div className="flex gap-4">
              {/* Bones */}
              <button className="h-10 flex justify-center items-center gap-2 text-xl px-4 text-blue-800 border-blue-800 border-2 rounded-2xl ">
                <IoMdCode/>
                <p>code</p>
              </button>
              <button className="flex  justify-center items-center gap-2 text-xl px-4 text-green-600 border-green-600 border-2 rounded-2xl">
                <IoLinkSharp/>
                <p>Go</p>
              </button>
            </div>
          </div>
        </div>
        
        


      </section>
    </div>
  )
}

export {Home}