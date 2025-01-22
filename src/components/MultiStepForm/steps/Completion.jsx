import PropTypes from 'prop-types'

const Completion = ({ form }) => {
  const { register, formState: { errors } } = form

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Abschluss</h2>
      <div className="mt-6">
        <label htmlFor="agb" className="flex items-center gap-4 cursor-pointer group">
          <div className="relative">
            <input
              {...register('agb')}
              type="checkbox"
              id="agb"
              className="sr-only peer"
            />
            <div className="w-6 h-6 border-2 border-gray-300 rounded-lg 
                         peer-checked:bg-[#C6A866] peer-checked:border-[#C6A866] 
                         group-hover:border-[#C6A866]
                         flex items-center justify-center transition-colors">
              <svg
                className="w-4 h-4 text-white hidden peer-checked:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094L8.707 14.707a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 011.32-1.497l.094.083L8 12.584l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <span className="text-lg">
            Ich akzeptiere die <a href="/agb" className="text-[#C6A866] hover:underline" target="_blank" rel="noopener noreferrer">AGB</a>.
          </span>
        </label>
        {errors.agb && (
          <p className="mt-1 text-red-500 ml-10">{errors.agb.message}</p>
        )}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Zusammenfassung</h3>
        <p className="text-gray-600">
          Bitte überprüfen Sie Ihre Angaben nochmal, bevor Sie das Formular absenden.
          Nach dem Absenden werden wir uns zeitnah bei Ihnen melden.
        </p>
      </div>
    </div>
  )
}

Completion.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.shape({
        agb: PropTypes.shape({
          message: PropTypes.string
        })
      })
    }).isRequired
  }).isRequired
}

export default Completion 