import banner from '../assets/banner.jpg'

const Homepage = () => {
    return (
      <>
      <div className='mt-12 mb-12'>
          <img className='rounded-2xl shadow-xl' src={banner} alt="" />
      </div>
      <p className='text-white font-light text-xl px-2'>
      <strong className='font-bold'>Cryptology science</strong> concerned with data communication and storage in secure and usually secret form. It encompasses both cryptography and cryptanalysis. <br/><br/>
      The term cryptology is derived from the <strong className='font-bold'>Greek kryptós (“hidden”) and lógos (“word”)</strong>. Security obtains from legitimate users being able to transform information by virtue of a secret key or keys—i.e., information known only to them. The resulting cipher, although generally inscrutable and not forgeable without the secret key, can be decrypted by anyone knowing the key either to recover the hidden information or to authenticate the source.
      </p>
      </>
    )
  }

  export default Homepage;