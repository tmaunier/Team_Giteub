##perl
##3
##return suite
##1
##../img/perl1_fibo.png

sub fibonacci {
  my $l = shift;
  $l < 3 ? 1 : fibonacci($l-1) + fibonacci($l-2)
}

foreach (1..16) {
  print fibonacci($_), ", ";
}
print "..."
