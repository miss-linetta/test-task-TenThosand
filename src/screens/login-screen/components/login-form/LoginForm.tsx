import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchema } from './validation';
import { styles } from './LoginForm.styles.ts';
import { LoginFormProps } from './types';

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={text => setValue('username', text)}
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Пароль"
        style={styles.input}
        secureTextEntry
        onChangeText={text => setValue('password', text)}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
