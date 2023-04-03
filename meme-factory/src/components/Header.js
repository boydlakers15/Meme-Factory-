import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project"><center><label>Click Here for Ref:&nbsp;</label><a  href='https://www.google.com/search?q=great+memes&tbm=isch&ved=2ahUKEwjtru2ig47-AhXlsaQKHQYXD4kQ2-cCegQIABAA&oq=great+memes&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQBRAeOgQIIxAnOgYIABAIEB5Q_AZYohhg-RtoAHAAeACAAViIAZADkgEBN5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=gfAqZK3qO-XjkgWGrrzICA&bih=961&biw=1920'>Click Me</a></center></h4>
        </header>
    )
}