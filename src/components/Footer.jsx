import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop:{' '}
            <span className="text-blue underline">Find an Apple Store </span>
            or <span className="text-blue underline">other retailer</span> near
            you.
          </p>

          <p className="text-xs font-semibold text-gray">Or call 0800-0464</p>
        </div>

        <div className="my-5 h-[1px] w-full bg-neutral-700" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            Copyright @ 2024 Apple Inc. All Rights Reserved.
          </p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p className="text-xs font-semibold text-gray" key={link}>
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
