import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';

const Formulario = () => {
  const { handleSubmit, control, reset, formState: { errors } } = useForm();
  const [usuarios, setUsuarios] = useState([]);

  const onSubmit = async (data) => {
    try {
      setUsuarios([...usuarios, data]);
      reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Formulario de Usuario para Prueba
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: 'Nombre es requerido' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre"
              fullWidth
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: 'Nombre de usuario es requerido' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Cedula o RIF"
              fullWidth
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ""}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Correo electrónico es requerido', pattern: { value: /^\S+@\S+$/i, message: 'Correo electrónico inválido' } }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Correo electrónico"
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Teléfono"
              fullWidth
            />
          )}
        />
        <Controller
          name="website"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Sitio web"
              fullWidth
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Registrar</Button>
      </form>
      <div>
        <Typography variant="h5">Usuarios Registrados</Typography>
        {usuarios.length > 0 ? (
          <ul>
            {usuarios.map((usuario, index) => (
              <li key={index}>{usuario.name} - {usuario.username} - {usuario.email}</li>
            ))}
          </ul>
        ) : (
          <Typography variant="body1">No hay usuarios registrados.</Typography>
        )}
      </div>
    </div>
  );
};

export default Formulario;
