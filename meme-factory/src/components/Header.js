import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJMaickhhZN8elf2LB_-8irLaVu7XK2pEcw&usqp=CAU" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project"><label>Click Here For Ref:&nbsp;</label>
            <button><center><a href='https://www.google.com/search?q=great+memes&tbm=isch&ved=2ahUKEwjtru2ig47-AhXlsaQKHQYXD4kQ2-cCegQIABAA&oq=great+memes&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQBRAeOgQIIxAnOgYIABAIEB5Q_AZYohhg-RtoAHAAeACAAViIAZADkgEBN5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=gfAqZK3qO-XjkgWGrrzICA&bih=961&biw=1920'>Click Here</a></center>
            </button></h4>
        </header>
    )
}