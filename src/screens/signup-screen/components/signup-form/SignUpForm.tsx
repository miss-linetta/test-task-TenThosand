import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpSchema } from './validation';
import { styles } from './SignUpForm.styles.ts';
import { SignUpFormProps } from './types';

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  // const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={40}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.inner}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              placeholder="Enter your name"
              style={styles.input}
              onChangeText={text => setValue('name', text)}
            />
            {errors.name && (
              <Text style={styles.errorText}>{errors.name.message}</Text>
            )}

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              keyboardType="email-address"
              onChangeText={text => setValue('email', text)}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                placeholder="Enter your password"
                style={[styles.input, { flex: 1, marginBottom: 0 }]}
                secureTextEntry={true}
                onChangeText={text => setValue('password', text)}
              />
            </View>

            {/*TODO: Add eye button*/}
            {/*<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>*/}
            {/*    /!* icon *!/*/}
            {/*</TouchableOpacity>*/}

            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
