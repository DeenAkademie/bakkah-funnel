import PropTypes from 'prop-types';

const REISE_OPTIONEN = [
  {
    id: 'umra-baraa-03',
    label: 'UMRA - Abul Baraa 03/25',
    reiseart: 'Umra',
    reisefuehrer: 'AB',
    reisezeitraum: '03/25',
  },
  {
    id: 'umra-hamza-06',
    label: 'UMRA - Abul Hamza 06/25',
    reiseart: 'Umra',
    reisefuehrer: 'AH',
    reisezeitraum: '06/25',
  },
  {
    id: 'umra-baraa-09',
    label: 'UMRA - Abul Baraa 09/25',
    reiseart: 'Umra',
    reisefuehrer: 'AB',
    reisezeitraum: '09/25',
  },
  {
    id: 'umra-hamza-12',
    label: 'UMRA - Abul Hamza 12/25',
    reiseart: 'Umra',
    reisefuehrer: 'AH',
    reisezeitraum: '12/25',
  },
  {
    id: 'hadsch-baraa-04',
    label: 'HADSCH - Abul Baraa 04/25',
    reiseart: 'Hadsch',
    reisefuehrer: 'AB',
    reisezeitraum: '04/25',
  },
  {
    id: 'hadsch-hamza-04',
    label: 'HADSCH - Abul Hamza 04/25',
    reiseart: 'Hadsch',
    reisefuehrer: 'AH',
    reisezeitraum: '04/25',
  },
];

const TravelType = ({ form }) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = form;

  const handleReiseChange = (e) => {
    const selectedReise = REISE_OPTIONEN.find(
      (option) => option.id === e.target.value
    );
    if (selectedReise) {
      setValue('reiseart', selectedReise.reiseart);
      setValue('reisefuehrer', selectedReise.reisefuehrer);
      setValue('reisezeitraum', selectedReise.reisezeitraum);
    }
  };

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6'>Reise</h2>
      <div className='mb-6'>
        <label htmlFor='reise' className='block text-lg font-medium mb-2'>
          Wählen Sie Ihre Reise *
        </label>
        <select
          {...register('reise')}
          onChange={(e) => {
            register('reise').onChange(e);
            handleReiseChange(e);
          }}
          className='block w-full border border-gray-300 rounded-lg shadow-sm p-3
                   focus:ring-[#C6A866] focus:border-[#C6A866] text-lg
                   aria-invalid:border-red-500'
          aria-invalid={!!errors.reise}
        >
          <option value=''>Bitte wählen Sie eine Reise</option>
          {REISE_OPTIONEN.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.reise && (
          <p className='mt-1 text-red-500'>{errors.reise.message}</p>
        )}
      </div>
    </div>
  );
};

TravelType.propTypes = {
  form: PropTypes.shape({
    register: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    formState: PropTypes.shape({
      errors: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default TravelType;
