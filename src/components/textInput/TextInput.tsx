import { DeepRequired, FieldErrorsImpl, FieldValues, GlobalError, UseFormRegister } from 'react-hook-form'

import styles from 'components/textInput/TextInput.module.scss'

interface TextInputProps<T> {
  name: keyof T
  alias: string
  placeholder: string
  register: UseFormRegister<T>
  validation: object
  error?: Partial<FieldErrorsImpl<DeepRequired<FieldValues>>> & { root?: Record<string, GlobalError> & GlobalError }
}

export const TextInput = <T,>({ name, alias, placeholder, register, validation, error }: TextInputProps<T>) => {
  return (
    <div className={styles.formGroup}>
      <input
        className={styles.input}
        type="text"
        {...register(name, validation)}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && (
        <p className={styles.errorMessage} role="alert">
          {error.type === 'required' ? `${alias} is required` : `${alias} is invalid`}
        </p>
      )}
    </div>
  )
}
